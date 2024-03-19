import { NextResponse } from "next/server";


const Api = process.env.NEXT_PUBLIC_API;

export async function POST(req, res) {
    const response = await req.json();
    console.log(response);
    try {
        const { Username, Password, Zone } = response;
        const resAxios = await fetch(Api + ``, {
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
