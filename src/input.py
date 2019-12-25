ip = input("Enter IP address \n")
f = open("../scripts/yeelight-ips","w")
f.write(ip)
f.close()