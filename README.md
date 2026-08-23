# DementiaAide Assistant (MVP)

Easy to undertstand Guide on how the chatbot works for Ana!

# Picture of How It Works

```mermaid
flowchart TD
    A["Caregiver types a question<br/>e.g. mom wont shower"] --> B{"Emergency words?<br/>ai.ts:294<br/>(face droop, missing, etc)"}
    B -- "Yes" --> C["Show 911 / Emergency card<br/>ai.ts:294"]
    B -- "No" --> D{"Matches a keyword pattern?<br/>ai.ts:383"}
    D -- "No match at all" --> E["Say not covered yet<br/>+ send to Discord<br/>ai.ts:544"]
    D -- "Match found" --> F["Pick the pre written answer card<br/>(specific scenario first, else general catagory)<br/>ai.ts:564"]
    F --> G["Attach 1-3 trusted links<br/>NIA, Alzheimer's Assoc, etc<br/>ai.ts:244"]
    F --> H["Find matching blog articles<br/>from resources.ts<br/>ai.ts:216"]
    G --> I["Final answer shown to caregiver"]
    H --> I
    C --> I
```

# Explanation of Ai.ts

Step 1:
ai.ts:383 is how the "chatbot" filters for the correct catagory, it scans for keywords like shower bath etc using a big list of patterns. If it cant match any catagory it falls through to "general" (see Step 5).

Note: ai.ts:126 is NOT part of this step, even though it looks related. That's a separate synonym list (shower = bath = hygiene, etc) thats only used later in Step 4 to help find matching blog articles, not to pick the catagory.

Step 2:
ai.ts:294 is how we check for red flags where we instantly tell users to call 911, we look for words like missing person, face droop etc.

Step 3:
ai.ts:564 is where we have pre written information/explaination that we give the user based on the catagory chosen from step 1. It actually picks the most specific match first (like "bathing_resistance"), and only uses the more general catagory answer if theres no specific one written for that situation.

Step 4: 
ai.ts:40 is just the list of trusted reading links (NIA, Alzhiemers's Association, etc) sitting in the file. ai.ts:244 is what actually picks which 3 links to attach to the answer, and ai.ts:1162 is where that gets called. 

Step 5:
If nothing matches then we say that we dont have this covered then we send them to the Discord. ai.ts:544

# Explaination of resources.ts

This file is basically a spreadsheet of all of Ana's blog articles, written directly into the code. ai.ts uses this list to recommend articles that go along with an answer. (I think we would move this to a database in the future)

Step 1:
resources.ts:25 is the "shape" every article card has to follow: a title, a slug (the web-address version of the title), a catagory, a one sentence summary, some tags (keywords), and a yes/no for featured.

Step 2:
resources.ts:79 is the actual list, about 48 cards, one per real blog post, each filled out by hand using that shape from Step 1.

Step 3:
resources.ts:16 is the list of the 7 catagory buckets an article can be filed under (Start Here, Daily Care, Safety & Crisis, etc), and resources.ts:34 has a short description and icon/color for each bucket, used to make the resources page look nice.

Step 4:
When ai.ts wants to recommend articles for a question, it checks the title/summary/catagory/tags of every card here against the persons question and the keywords from Step 1 of the ai.ts section, then picks the best matching cards (see ai.ts:216).

Step 5:
resources.ts:450 (getResourceUrl) is what turns a cards slug into the actual clickable link to Ana's blog.


