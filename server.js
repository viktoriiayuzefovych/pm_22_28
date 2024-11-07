import express from 'express';
import cors from 'cors';
const app = express();
const port =  8080;

app.use(cors());

app.get('/data', (req, res) => {
    res.json({
        profile:[
            {name: "Loran Ipsum",
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ],
        skills:[
            { name: "Adobe Photoshop", progress: "83.3%" },
            { name: "Adobe Illustrator", progress: "76%" },
            { name: "HTML-5/CSS-3", progress: "63.3%" },
            { name: "Microsoft Word", progress: "69%" },
            { name: "Microsoft Powerpoint", progress: "64%" }
        ],
        referen:[
            { name: "Darwin Magana",
                address: "2813 Shobe Lane Mancos, CO.",
                phone: "+1-970-533-3393",
                email:"www.yourwebsite.com"
               }, 
       
               {name: "Darwin Magana",
                address: "2813 Shobe Lane Mancos, CO.",
                phone: "+1970-533-3393",
                email:"www.yourwebsite.com"
               }
        ],

    })

});
    app.listen(port, () => {
        console.log(`Server works on http://localhost:${port}`);
    });