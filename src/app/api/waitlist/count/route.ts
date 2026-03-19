import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'submissions.json');

export async function GET() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const submissions = JSON.parse(data);
    return NextResponse.json({
      total: submissions.length,
      byType: {
        waitlist: submissions.filter((s: { type: string }) => s.type === 'waitlist').length,
        partnership: submissions.filter((s: { type: string }) => s.type === 'partnership').length,
        investor: submissions.filter((s: { type: string }) => s.type === 'investor').length,
      },
    });
  } catch {
    return NextResponse.json({ total: 0, byType: { waitlist: 0, partnership: 0, investor: 0 } });
  }
}
