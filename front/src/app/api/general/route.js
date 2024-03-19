import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        if (!req.body) {
            return NextResponse.json(
                {
                    status: 500,
                    message: "No body",
                },
                {
                    status: 500,
                }
            );
        }
        const { url, method, body } = await req.json();

        if (!url || !method) {
            return NextResponse.json(
                {
                    status: 500,
                    message: "Missing data",
                },
                {
                    status: 500,
                }
            );
        }

        const possibleMethods = ["get", "post", "put", "delete"];
        if (!possibleMethods.includes(method)) {
            return NextResponse.json(
                {
                    status: 500,
                    message: "Invalid method",
                },
                {
                    status: 500,
                }
            );
        }

        const path = `${process.env.NEXT_PUBLIC_API}${url}`;

        const { data } = await axios?.[method](path, body);
        console.log(data, "DATAAA");
        // Print the API response
        console.log(data, "DATAAA");
        // Print the API response
        return NextResponse.json(
            {
                message: data?.message || "Success",
                data: data,
            },
            {
            }
        );
        const message = data?.message || "Success";
        const response = data?.data || {};
        return NextResponse.json(
            {
                status,
                message,
                data: response,
            },
            {
                status,
            }
        );
    } catch (error) {
        const { endStatus, endMessage, endError } = createError(error);
        return NextResponse.json(
            {
                status: endStatus,
                message: endMessage,
                error: endError,
            },
            { status: endStatus }
        );
    }
}
