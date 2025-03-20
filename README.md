# Readyinfra
Setup guide:
# VM
For the VM we will use the latest Ubuntu version, download the ISO and setup the VM like we normally do. 

# Microstack
- We begin by upgrading our packages: 
```
sudo apt upgrade && sudo apt install
```
- Then we install Microstack and launch microstack
```
sudo apt install microstack --classic --edge
microstack init --auto --control
```
- You should be able to access the dashboard on the link http://< your-ip > the user is **Root**, to find the password run the following command:
```
sudo snap get microstack config.credentials.keystone-password
```

 This would be enough to use the GUI, however the CLI tool is more preferable in documentation and scripting so we set this up now

# Openstack's CLI
run the following command first:
```
openstack --version
```
if it returns a version then skip this part if not then proceed: 
- nano into your .bashrc `nano ~/.bashrc`  and write the following line:
```
#OPENSTACK CLI 
export PATH=$PATH:/snap/microstack/current/bin
```

- Following that run `source ~/.bashrc` and check for the version again
- next run the following command to authenticate your CLI: 
```
source /var/snap/microstack/common/etc/microstack.rc
```

You should be able to use the CLI Completely now 
**Never use `sudo` with openstack's CLI as it relies on environment variables unavailable to the root users**



