import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { user_id, image } = await request.json();

    if (!user_id || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const mockAnalysis = {
      conditions: [
        { type: 'acne', severity: 3, confidence: 0.87 },
        { type: 'dryness', severity: 2, confidence: 0.92 }
      ],
      recommendations: [
        { product_id: '1', name: 'Acne Treatment', link: '/products/1' }
      ]
    };

    const { data, error } = await supabase
      .from('skin_analyses')
      .insert({
        user_id,
        analysis_date: new Date().toISOString(),
        results: mockAnalysis,
        image_url: '/temp/images/analysis.jpg'
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      analysis_results: mockAnalysis,
      metadata: { timestamp: new Date().toISOString() }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}