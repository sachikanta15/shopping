import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { getGoogleShoppingResults } from "../utils/googleShopping";
export const search = async (req: Request, res: Response,next:NextFunction) => {
      const { country, query,sort } = req.body;

  if (!country || !query) {
    return res.status(400).json({ error: "Both 'country' and 'query' are required." });
  }

  try {
    const data = await getGoogleShoppingResults(query, country);
    //@ts-ignore
    // const results = data.results || data.data || [];
    const results =
  data.results?.[0]?.content?.results?.organic ||
  data.results?.[0]?.content?.shopping?.products ||
  [];
    console.log("Results:",results);
    if (sort === "asc") {
      //@ts-ignore
      results.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      //@ts-ignore
      results.sort((a, b) => b.price - a.price);
    }
    res.json(results);
  } catch (error) {
    console.error("Error fetching prices:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
};