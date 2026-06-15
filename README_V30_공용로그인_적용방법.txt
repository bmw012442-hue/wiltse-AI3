# ICU AI v29 - 배포 오류 대응 / GitHub 웹 업로드 안전본

이 버전은 Render 오류 '... is not valid JSON' 대응용입니다.

핵심:
- icu_ai_manual_db_v2.json 파일을 JSON 유효성 검증 완료 상태로 다시 생성
- 실제 그림 파일을 public/manual_images 폴더가 아니라 public 루트에 배치
- GitHub 웹 업로드에서 이미지가 public 루트에 풀려도 카드 상세 이미지가 보이도록 DB 경로 수정
- V28의 실제 그림/표 기능 유지

적용 방법:
1. GitHub 저장소에서 루트 public 폴더로 들어갑니다.
2. ZIP 안의 public 폴더 안 파일 전체를 public 폴더에 업로드해서 덮어씁니다.
3. Commit changes를 누릅니다.
4. Render에서 배포가 다시 시작됩니다.
5. 배포 후 오류가 나면 Logs에서 첫 오류 줄을 확인합니다.

중요:
- public 안에 있는 icu_ai_manual_db_v2.json은 반드시 첫 글자가 { 로 시작해야 합니다.
- data.js는 window.ICU_MANUAL_DB = 로 시작하는 것이 맞습니다.
- icu_ai_manual_db_v2.json이 window.ICU_MANUAL_DB = 로 시작하면 Render에서 JSON 오류가 납니다.
