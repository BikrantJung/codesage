FROM node:18.16.0-alpine3.16

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Remove dev-db container
RUN docker-compose rm dev-db -f -s -v

# Start dev-db container in detached mode
RUN docker-compose up -d dev-db

# Run the Prisma schema migration
RUN npx prisma migrate deploy

# Start the Next.js development server
CMD ["npm", "run", "dev"]
