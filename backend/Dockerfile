# ---------- Stage 1: Install dependencies ----------
FROM node:18-alpine AS deps

WORKDIR /app

COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# ---------- Stage 2: Build final image ----------
FROM node:18-alpine

WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy app source
COPY . .

# Remove unnecessary files
RUN rm -rf node_modules/.cache

# Expose port
EXPOSE 5001

# Start app (production)
CMD ["npm", "start"]
