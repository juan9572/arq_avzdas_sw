import { NextResponse } from "next/server";

const Username = process.env.NEXT_PUBLIC_USERNAME;
const Password = process.env.NEXT_PUBLIC_PASSWORD;
const Zone = process.env.NEXT_PUBLIC_ZONE_ID;
const Api = process.env.NEXT_PUBLIC_API;

export async function POST(req, res) {
    try {
        const resAxios = await fetch(Api + `/auth/`, {
            body: JSON.stringify({
                username: Username,
                password: Password,
                zone: Zone,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        if (resAxios.status != 200) {
            const errorData = await response.json();
            throw new Error(errorData.detail);
        }

        const { data } = await resAxios.json();
        console.log(data);
        return NextResponse.json({
            ...data,
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            {
                statusCode: 500,
                message: err.message,
            },
            {
                status: 500,
            }
        );
    }
}
