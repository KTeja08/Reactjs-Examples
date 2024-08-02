import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. 

Nowadays, however, more than 70% of diners visit a restaurant's website before deciding where to dine, which means the first impression happens long before they set foot on-premises. It happens online. And when it does, the restaurant description plays a pivotal role.

Despite this, many restaurants struggle to write an effective description for their website. Doing so requires a mix of skills not every restaurant has — writing, design and a keen understanding of digital user behavior — but there are tools in place to make the job easier. For example, if you build your website with BentoBox, full-service designers can help create your website on a template that is proven to be user-friendly. That takes care of the design and user behavior hurdles.

To help overcome the writing hurdle, we've created the resource below. In addition to defining best practices, we have curated 20 examples of effective restaurant descriptions and analyzed why they work. If you don't know where to start or feel stuck, scroll through these examples and see if they spark new ideas.


        </p>
        <br />
        <p>
        A good restaurant description needs to make a strong first impression on would-be diners. This means the writing should be grammatically sound and typo-free — but it also means the content should make strategic sense for your brand. There are several keys to doing this correctly:

Define your objective. As you'll see in the examples below, descriptions that work for some restaurants would fall flat for others. A cocktail lounge might want its description to be a call to adventure, while a sandwich shop might simply want to say it has the lowest prices in town. Define the main thing you want your audience to know or feel, then use that as a north star to guide your writing.

Outline key points. Now that you know your objective, write down all the key messages you want to communicate. Sort them into tiers of importance, and be honest about what is "nice to know" versus what is "need to know." Digital attention spans are short, so if you try to include every selling point — rather than just the essentials — readers will gloss over your description. The more information you ask them to retain, the less they actually will.

Consider the visuals. As you determine the best way to communicate "need to know" messages, remember that text is not the only way to communicate. Many of the examples below use design and photography to reinforce their key selling points. This reduces how much text you need and helps solve the attention span issue mentioned above, but to do it correctly across devices, you'll need a well-designed website platform.

Edit & ask for feedback. There's a famous saying in the writing industry: "writing is rewriting." In other words, your first draft always needs work, and the real craft of writing comes in making that first draft better. When you have something down, read it over for typos but also play around with different word choices and sentence structures. Ask people you trust for feedback. If you do this well, you'll only have to do it once. It's worth investing a little extra time.
        </p>
      </Box>
    </Layout>
  );
};

export default About;