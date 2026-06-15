# ICU AI WebApp v27

목적:
- V24의 표(table) / 그림(image) 표시 기능 유지
- V26 업로드 매뉴얼 DB 추가본을 그대로 반영
- 검색 결과 카드 상세에서 표/그림 필드가 계속 보이도록 유지

적용 내용:
1. public/app.js 유지: 카드 상세에서 tables, images 렌더링 지원
2. public/index.html / style.css 유지
3. public/data.js 및 public/icu_ai_manual_db_v2.json 버전 업데이트
4. V26에서 추가된 카드 DB 유지

중요:
- 현재 표 데이터는 즉시 표시됩니다.
- 그림(image) 데이터도 지원됩니다.
- 추후 실제 그림 자료를 DB의 images 배열에 넣으면 검색 결과 상세 카드에서 바로 표시됩니다.

GitHub 적용:
- 저장소 루트 public 폴더에 ZIP 안의 public 폴더 파일을 덮어쓰기
- Render 배포 환경이면 커밋 후 자동 재배포 또는 manual deploy
