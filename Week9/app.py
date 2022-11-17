from flask import *
from view.api import api

app=Flask(
    __name__,
    static_folder = "static", # 靜態檔案的資料夾名稱
    static_url_path = "/" # 靜態檔案對應的網址路徑
    )
app.config["JSON_AS_ASCII"]=False
app.config["TEMPLATES_AUTO_RELOAD"]=True

# Pages
@app.route("/")
def index():
    return render_template('index.html')
@app.route("/attraction/<id>")
def attraction(id):
	return render_template("attraction.html")
@app.route("/booking")
def booking():
	return render_template("booking.html")
@app.route("/thankyou")
def thankyou():
	return render_template("thankyou.html")


if __name__ == "__main__":
    app.register_blueprint(api)
    app.run(host='localhost',port=3000,debug=True)