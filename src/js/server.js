import http from "http";
import mysql from "mysql2/promise";
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: 'drld54ue0',
    api_key: '947943685963315',
    api_secret: 'DdxQysWi4N1al5DD_Cwt-U2dH4w'
});

async function startServer() {
    const PORT = 5000;

    const server = http.createServer(async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Content-Type", "application/json");


        console.log(req.url);
        console.log(req.method);

        if (req.method === "OPTIONS") {
            res.writeHead(200);
            return res.end();
        }

        if (req.url = "/deleteFromCloudinary" && req.method === "DELETE") {
            let body = "";

            req.on("data", chunk => {
                body += chunk.toString();
            });

            req.on("end", async () => {
                const { publicId } = JSON.parse(body);

                console.log(publicId);


                cloudinary.uploader.destroy(publicId, (error, result) => {
                    console.log(result, error);
                });

            });

            res.writeHead(200);
            res.end(JSON.stringify({ message: "Éxito" }));

            return;
        }


        console.log("URL no encontrada");

        res.writeHead(404);
        res.end(JSON.stringify({ message: "URL no encontrada" }));
    });


    server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
}

await startServer();