[V28 적용 안내]

이번 버전은 V27 기능을 유지하면서 업로드된 업무 매뉴얼(.hwp)에서 실제 그림/표 이미지를 추출하여 관련 카드 상세화면에 연결한 버전입니다.

포함 사항
1. 기존 V27의 표(table) 표시 기능 유지
2. 실제 그림/표 이미지 27개를 public/manual_images/ 폴더에 추가
3. 아래 영역 카드에서 실제 이미지가 상세화면에 표시되도록 연결
   - CSR 물품
   - 통증평가
   - Lab bottle
   - BST/DM/인슐린
   - Nebulizer / 산소요법 / 의료장비
   - 수혈
   - 다제내성감염균 / 격리
   - GCS / Mental
   - I&O
   - ABGA

GitHub 적용 방법
1. zip 압축 해제
2. repository의 public 폴더 안에 있는 기존 파일을 이번 버전 public 폴더 내용으로 덮어쓰기
3. root의 README / 안내 txt는 선택사항, 실제 필수는 public 폴더 및 루트의 package.json, render.yaml, server.js, sw.js 등 기존 구조 유지 여부 확인
4. 커밋 후 Render 재배포

필수 업로드 위치
- public/app.js
- public/data.js
- public/icu_ai_manual_db_v2.json
- public/manual_images/ (새 폴더 전체)
- public/index.html
- public/style.css
- public/manifest.json
- public/sw.js

주의
- 이미지가 보이지 않으면 브라우저 캐시를 새로고침(Ctrl+F5)하거나 홈화면 앱을 다시 열어주세요.
- PWA 사용 중이면 서비스워커 캐시 때문에 이전 파일이 남아 있을 수 있으니 재설치/새로고침을 권장합니다.
