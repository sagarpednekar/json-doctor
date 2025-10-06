import { GoogleGenerativeAI } from '@google/generative-ai';
import * as Sentry from "@sentry/nextjs"

const API_KEY = process.env.GEMINI_API_KEY || '';
if (!API_KEY) {
  Sentry.captureException('GEMINI_API_KEY is not set in environment variables')

  throw new Error('GEMINI_API_KEY is not set in environment variables');
}
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash-001',
});

export default model;
