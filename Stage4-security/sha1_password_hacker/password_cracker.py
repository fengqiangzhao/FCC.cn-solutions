import hashlib


def crack_sha1_hash(hash, use_salts=False):
    if use_salts:
        with open('known-salts.txt', 'r') as f:
            salts = [salt.strip() for salt in f.readlines()]

    with open('top-10000-passwords.txt', 'r') as f:
        passwords = [password.strip() for password in f.readlines()]

    for password in passwords:
        if use_salts:
            for salt in salts:
                verify_hash = hash_sha1(password, salt)
                if verify_hash == hash:
                    return password
        else:
            verify_hash = hash_sha1(password)
            if verify_hash == hash:
                return password
    return "PASSWORD NOT IN DATABASE"


def hash_sha1(data, salt=None):
    sha1 = hashlib.sha1()
    if salt:
        data = data + salt
    sha1.update(data.encode('utf-8'))
    return sha1.hexdigest()


if __name__ == "__main__":
    # print(
    #     crack_sha1_hash("53d8b3dc9d39f0184144674e310185e41a87ffd5",
    #                     use_salts=True))

    with open('known-salts.txt', 'r') as f:
        salts = [salt.strip() for salt in f.readlines()]

    for salt in salts:
        print(hash_sha1('01071988', salt))
