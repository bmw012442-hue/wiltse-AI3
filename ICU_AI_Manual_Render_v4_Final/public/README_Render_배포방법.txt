# ICU AI 업무 매뉴얼 Render 배포용 v4

## Render 설정
- 반드시 Static Site가 아니라 Web Service로 생성하세요.
- Build Command: npm install
- Start Command: npm start
- Environment Variables:
  - OPENAI_API_KEY = 본인 OpenAI API 키
  - OPENAI_MODEL = gpt-4.1-mini

## 확인
배포 후:
- / : 앱 화면
- /health : 서버 상태 확인

## 아이폰
Safari에서 Render 주소 접속 → 공유 버튼 → 홈 화면에 추가

## 주의
API 키는 앱 파일에 넣지 말고 Render Environment Variables에만 넣으세요.
환자 개인정보는 입력하지 마세요.
실제 처치/투약/응급상황은 담당의 지시와 병원 최신 프로토콜을 우선합니다.
