import pickle

# defining variables
create_username = 0
create_password = 0
password = 0
username = 0

# this variable allows the user or denies the user to the rest of the program (will only run if access is 1)
access = 0


# creates a users dictionary
with open('MySQL', 'rb') as f:
    users = pickle.load(f)

print(users)

# sign up (creating new account)
while username not in users and username != 'signup':
    username = input("enter username(type signup to create an account): ")

    # add new user to dictionary
    if username == "signup" or username == "Signup":
        create_username = input("enter a new username: ")
        create_password = input("enter a new password (Your password cannot be the same as your username !!!!!!!): ")

    if create_password in users:
        create_password = input("password taken re-enter: ")
    # then adds the new username to the users dictionary
    if username == 'signup':
        users[create_username] = create_password

if username in users:
    password = input("enter password: ")

if password in users:
    print("access granted")

    access = 1
if username not in users and username != 'signup':
    username = input("enter username: ")

    if username in users:
        password = input("enter password")

    if password in users:
        print("access granted")
        access = 1

if password not in users:
    print("access denied")

with open('users.pickle', 'wb') as f:
    # Pickle the 'data' dictionary using the highest protocol available.
    pickle.dump(users, f, pickle.HIGHEST_PROTOCOL)

print(users)