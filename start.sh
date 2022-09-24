# This is a script file
# How to run SH file?
# The SH files usually run on Linux, even in Windows you need to connect with a Linux terminal using softwares such as Putty to run the sh files. Following are the steps to run an SH file on a Linux terminal.

# Open the Linux terminal and go to the directory where the SH file is located.
# By Using chmod command, set execute permission on your script (if not set already).

# e.g. chmod 755 my-script.sh
# 755 means read and execute access for everyone and also write for the owner of the file
# When you perform chmod 755 filename command you allow everyone to read and execute the file, the owner is allowed to write to the file as well.

# Run script using one of the following
# ./filename.sh
# sh filename.sh
# bash script-name-here.sh

npm init @angular education-portal --routing --style=scss
cd ./education-portal

npm install stream-chat-angular stream-chat @ngx-translate/core

npm install ngx-spinner @ng-select/ng-select jwt-decode

ng g service services/stream
ng g service services/auth

ng g component login
ng g component insideLayout
ng g component dashboard
ng g component chats
ng g component class
ng g component students

ng g guard guards/auth --implements CanActivate

npm i -D tailwindcss postcss autoprefixer @tailwindcss/forms
npx tailwindcss init

npm i @netlify/functions
