# Cách làm việc với git

## Tóm tắt
Tạo branch theo task trên github, clone repo về máy local, làm việc của task trên branch vừa tạo, kết thúc công việc thì push lên branch đó, cuối cùng là tạo pull request branch đó với master.

## Chú ý
* Không làm việc trực tiếp cũng như push trực tiếp lên master!
* Khi nhiều người cùng làm việc trên 1 file sẽ phát sinh conflict khi pull request lên master. PM sẽ cũng các dev giải quyết conflict code
* Không clone giữa chừng hoặc sau khi làm task, rồi override lên source code! git sẽ không nhìn nhận đây là conflict và sẽ yêu cầu xóa code cũ, ghi đè code mới! Khi phát hiện trường hợp này tuyệt đối không chấp nhận pull request!

## Câu lệnh cụ thể
