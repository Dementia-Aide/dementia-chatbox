# DementiaAide Assistant (MVP)

Easy to undertstand Guide on how the chatbot works for Ana!

# Explanation of Ai.ts

Step 1:
ai.ts:383 is how the "chatbot" filters for the correct catagory, it scans for keywords like shower bath etc. If it cant match to the correct catagory itll then expand its search and then got to ai.ts:126 which is just more synonyms that is matched to the catagory that we want.

Step 2:
ai.ts:294 is how we check for red flags where we instantly tell users to call 911, we look for words like missing person, face droop etc.

Step 3:
ai.ts:564 is where we have pre written information/explaination that we give the user based on the catagory chosen from step 1. 

Step 4: 
ai.ts:40 is where we attach more reading links from trusted sources like NIA or Alzhiemers's Association plus other work that we have linked. (This would include Ana's Blogs in the future)

Step 5:
If nothing matches then we say that we dont have this covered then we send them to the Discord. ai.ts:544



