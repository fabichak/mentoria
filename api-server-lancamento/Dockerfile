FROM node:22-alpine

WORKDIR /app

# Install production deps against the lockfile for reproducible builds.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# App source.
COPY server.js ./

# Drop root; the alpine image ships a non-root `node` user.
USER node

# Documentation only — actual port comes from the PORT env var at runtime.
EXPOSE 3000

CMD ["node", "server.js"]
