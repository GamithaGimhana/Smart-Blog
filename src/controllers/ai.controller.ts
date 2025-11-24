import axios from 'axios'
import { Request, Response } from 'express'

// /api/v1/post/ai/generate
export const generateContent = async (req: Request, res: Response) => {
    try {
        const { text, maxToken } = req.body

        // check text null send 400
        const aiResponse = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', 
            {
                contents: [
                    {
                        parts: [{text}]
                    }
                ], generationConfig: {
                    maxOutputTokens: maxToken || 150
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-goog-api-key': 'AIzaSyC0xZGhwaxqYubVP9sMiSj1BigUoJpLSsc'
                }
            }
        )

        const generatedContent =
        aiResponse.data?.candidates?.[0]?.content?.[0]?.text ||
        aiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        'No Data'

        console.log(res)

        res.status(200).json({
            data: generatedContent
        })
    } catch (error) {
        res.status(500).json({ message: 'Failed to generate AI content.!' })
    }
}