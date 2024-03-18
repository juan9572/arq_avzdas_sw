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

        // // Simulate successful response from API
        const token = "your_token_here";
        const data = {
            token: token,
        };
        return NextResponse.json(data, {
            status: 200,
        });
        // Espera respuesta real de Api
        // const { data } = await resAxios.json();
        // return NextResponse.json({
        //     ...data,
        // });


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
