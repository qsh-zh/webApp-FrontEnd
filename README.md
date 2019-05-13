# 1.0 创建环境  
environment.txt是使用的conda环境所有需要安装的依赖包。  
在conda环境中创建环境
```
conda create --name myenv --file environment.txt
```
# 2.0  运行
```
conda activate myenv 
python manage.py runserver
```
# 3.0 查看
开浏览器看状态
```
127.0.0.1:8000
```

# 4.0 Status
* 1.0 现在用的数据是存放在db.sqlite里面，可以直接修改。只是存放了最原始的价格数据，预测数据还没有放进来。现在用加噪声的方法来解决。<br>
* 2.0 改了代码之后查看，可能需要清除缓存