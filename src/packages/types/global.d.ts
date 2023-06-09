import { NextRequest as OriginalNextRequest } from "next/server";

declare global {
  declare interface NextRequest extends OriginalNextRequest {
    query: Record<string, string>;
  }
}
