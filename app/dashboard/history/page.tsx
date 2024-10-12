"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq, like } from "drizzle-orm";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Link } from "lucide-react";

export interface HistoryItem {
  [x: string]: any;
  id: number;
  templateSlug: string;
  aiResponse: string;
  createdAt: string;
  wordCount: number;
}

export default function HistoryPage() {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const fetchHistory = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const results = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
          .orderBy(desc(AIOutput.createdAt));

        const transformedResults: HistoryItem[] = results.map((item) => ({
          id: item.id,
          templateSlug: item.templateSlug,
          aiResponse: item.aiResponse ?? "",
          createdAt: new Date(item.createdAt ?? "").toLocaleDateString(),
          wordCount: item.aiResponse ? item.aiResponse.split(" ").length : 0,
        }));

        setHistoryItems(transformedResults);
      }
    };

    fetchHistory();
  }, [user]);

  const filteredItems = historyItems.filter(
    (item) =>
      item.templateSlug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.aiResponse.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <p className="text-gray-600 mb-4">
        Search your previously generated AI content
      </p>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>TEMPLATE</TableHead>
            <TableHead>AI RESP</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>WORDS</TableHead>
            <TableHead>COPY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.templateSlug}</TableCell>
              <TableCell className="max-w-md truncate">
                {item.aiResponse}
              </TableCell>
              <TableCell>{item.createdAt}</TableCell>
              <TableCell>{item.wordCount}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(item.aiResponse)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
