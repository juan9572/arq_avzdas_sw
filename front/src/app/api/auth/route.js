import { NextResponse } from "next/server";

const Username = process.env.NEXT_PUBLIC_USERNAME;
const Password = process.env.NEXT_PUBLIC_PASSWORD;
const Zone = process.env.NEXT_PUBLIC_ZONE_ID;
const Api = process.env.NEXT_PUBLIC_API;

export async function POST(req, res) {
    try {

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

        // // // Espera respuesta real de Api
        const { data } = await resAxios.json();
        return NextResponse.json({
            ...data,
        });

        // //Simula respuesta de Api
        // const inventedData = [1, 2, 3, 4, 5];
        // return NextResponse.json({
        //     // ...data,
        //     inventedData,
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
