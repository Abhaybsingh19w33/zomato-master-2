FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_URL=mongodb+srv://abhay_19w332:9904750095@zomatoclone2.ftahz.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=281387821340-sqo5rn8srrjqvsfumo6vtk01vk2kp143.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=idFcjz7WO2B7Pz7zHERpZHUg
ENV AWS_S3_ACCESS_KEY=AKIAT744OTRVL7OAOSOW
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__DOMAIN=sandbox446b8012c2bc45cb8e5be995c5fa84c5.mailgun.org
ENV MAILGUN__API__KEY=b2f98d64c1270ac17001d3ed6e49c97e-2ac825a1-d90786c1
ENV RZR_PAY_ID=rzp_test_l89CFzgqI23dYL
ENV RZR_PAY_SECRET=pdpDl9dN59iNIGwcBpUFPTcX

CMD ["npm", "run", "start"]
