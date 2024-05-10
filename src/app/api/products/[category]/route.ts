import pool from "@/app/libs/mysql";
import { error, log } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { category: string } }
) {
  const category = params.category;
  try {
    const db = await pool.getConnection();
    const query = `SELECT Products.* FROM Products JOIN Categories ON Products.category_id=Categories.id WHERE Categories.index = '${category}'`;
    const [rows] = await db.execute(query);
    db.release();

    return NextResponse.json(rows, { status: 200 });
  } catch (ex) {
    return NextResponse.json({ error: ex }, { status: 500 });
  }
}
