# for now it will be a harcoded dictionary to showcase the companies where
# people can apply for a Praktikum for Umschulung since there is no such a site atm

from companies import all_companies

from fastapi import FastAPI


#initalize Fast API

app = FastAPI()
#@@@@@@
# creatine a route to display the companies
@app.get("/companies")
# this it a function that displays the companies
def get_companies():
    companies_to_display = []
    for i in all_companies:
        companies_to_display.append(i)
    return companies_to_display





