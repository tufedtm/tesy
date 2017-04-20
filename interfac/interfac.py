import os
import random
import string
import base64

with open('addresses.txt') as file:
    addresses = file.read().split('\n')
    alphabet = string.ascii_lowercase + string.digits

    with open('access-rules-3128.conf', 'w') as rules_file:
        with open('user-pass', 'w') as user_pass_file:
            for address in addresses:
                username = ''.join(random.choice(alphabet) for i in range(10))

                while True:
                    password = ''.join(random.choice(alphabet) for i in range(20))
                    if (any(c.islower() for c in password)
                        and sum(c.isdigit() for c in password) >= 3):
                        password_base64 = base64.b64encode(bytes(password, 'utf8')).decode()
                        break

                rules_file.write('acl {}1 proxy_auth {}\n'.format(username, username))
                rules_file.write('tcp_outgoing_address {} {}1\n\n'.format(address, username))
                user_pass_file.write('{}:{}\n'.format(username, password))
                os.system('htpasswd -b users-3128 {} {}'.format(username, password))
