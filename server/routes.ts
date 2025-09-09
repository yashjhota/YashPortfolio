import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Connect to Postgres (Supabase connection string in .env)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required by Supabase
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);

      const result = await pool.query(
        `INSERT INTO contact (name, email, subject, message)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [
          validatedData.name,
          validatedData.email,
          validatedData.subject,
          validatedData.message,
        ]
      );

      const contact = result.rows[0];

      console.log("📩 New contact form submission:", contact);

      res.json({
        success: true,
        message: "Message stored successfully 🚀",
        data: contact,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      } else {
        console.error("❌ Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // Get all contacts (for admin dashboard)
  app.get("/api/contacts", async (_req, res) => {
    try {
      const result = await pool.query(
        `SELECT id, name, email, subject, message, created_at
         FROM contact
         ORDER BY created_at DESC`
      );

      res.json(result.rows);
    } catch (error) {
      console.error("❌ Get contacts error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
