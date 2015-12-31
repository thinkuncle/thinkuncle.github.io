lsof
====
list open file �г��򿪵��ļ�������
##�����Ϣ
```
COMMAND    PID  TID    USER   FD      TYPE             DEVICE  SIZE/OFF       NODE NAME
systemd      1         root  cwd       DIR              253,1      4096        128 /
systemd      1         root  rtd       DIR              253,1      4096        128 /
systemd      1         root  txt       REG              253,1   1214408    8702666 /usr/lib/systemd/systemd
```
|�ֶ�|˵��|
COMMAND|���̵�����
PID|���̱�ʶ��
USER|����������
FD|�ļ������� 
TYPE|�ļ����ͣ���DIR��REG��
DEVICE|ָ�����̵����ƣ������豸�ţ����豸�ţ�
SIZE|�ļ��Ĵ�С
NODE|�����ڵ㣨�ļ��ڴ����ϵı�ʶ��
NAME|���ļ���ȷ������

###FD�ֶ�
- cwd:��ǰ����Ŀ¼
- txt:�ļ��ĳ�����루����Σ�
- mem:ֱ��ӳ�䵽�ڴ��е��ļ������綯̬�⣩
- rtd:��ʾ�û���Ŀ¼
- ���֣�fdֵ��+��ĸ���������£�
  - u:�ɶ���д
  - r:�ɶ�
  - w:��д
  - W:д��
  
##����ѡ��
|ѡ��|����
|:---:|----
|-a|��������������ʱ����ʾ���
|-c `string`|��ʾCOMMAND�ֶΰ���string�Ľ��̴򿪵��ļ�
|-u `username`|��ʾָ���û����̴򿪵��ļ�
|-p `pid`|��ʾָ�����̴򿪵��ļ�
|-n|ͬnetstat��`-n`
|-t|����ʾPID������fd�Ľ��̣�

###-i
��ʾ**socket**�ļ�������(������root���ʹ��)��

    lsof -i [46] [protocol] [@hostname|ipaddr] [:service|port]

|����|˵��
|-----|----
|[46]|4��ʾIPv4Э�飻6��ʾIPv6Э��
|[protocol]|��ʾ�����Э�飺tcp��udp
|[@hostname|ipaddr]|ָ����������IP��ַ
|[:service|port]|ָ����������˿ں�

����鿴22�˿ڣ�ssh����û�б�������
```
lsof -i 4 :22
lsof -i6 :22
```
>sshd�����IPv4��IPv6�����׽���
