import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { MASTER_MENU } from "./master-menu.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Central API Endpoint for Master Menu
  // Returns the master menu structure. Clone applications fetch from this endpoint.
  app.get("/api/menu", (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.json({
      status: "success",
      timestamp: new Date().toISOString(),
      data: MASTER_MENU
    });
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", restaurant: MASTER_MENU.restaurant.nameEnglish });
  });

  // Vite middleware for development vs static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
