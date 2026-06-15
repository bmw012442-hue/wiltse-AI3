services:
  - type: web
    name: icu-ai-manual
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: OPENAI_MODEL
        value: gpt-4.1-mini
      - key: OPENAI_API_KEY
        sync: false
      - key: ICU_LOGIN_ID
        sync: false
      - key: ICU_LOGIN_PASSWORD
        sync: false
      - key: SESSION_SECRET
        sync: false
      - key: SESSION_HOURS
        value: "12"
