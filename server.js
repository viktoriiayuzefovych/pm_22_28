import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());

app.get('/data', (req, res) => {
    res.json({
        /*skills:[
            { name: "Adobe Photoshop", progress: "83.3%" },
            { name: "Adobe Illustrator", progress: "76%" },
            { name: "HTML-5/CSS-3", progress: "63.3%" },
            { name: "Microsoft Word", progress: "69%" },
            { name: "Microsoft Powerpoint", progress: "64%" }
        ];*/
        referen:[
            {name: "Darwin Magana" },
            { address: "2813 Shobe Lane Mancos, CO."},
            { phone: "Tel:"},
            { email:"Email:"}, 

            {name: "Darwin Magana" },
            { address: "2813 Shobe Lane Mancos, CO."},
            { phone: "Tel:"},
            { email:"Email:"}
        ],

    })

});
    app.listen(port, () => {
        console.log(`Server works on http://localhost:${port}`);
    });