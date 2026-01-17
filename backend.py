# for now it will be a harcoded dictionary to showcase the companies where
# people can apply for a Praktikum for Umschulung since there is no such a site atm

from companies import all_companies

from fastapi import FastAPI



# Create a Class and type for the inputs

class User_input:
    def __init__(self,plz:str, ort:str, difficulty:int):
        self.input_ort = ort
        self.input_plz = plz
        self.input_difficulty = difficulty



    



#initalize Fast API

app = FastAPI()
#@
# creatine a route to display the companies
@app.get("/companies")
# this it a function that displays the companies
def get_companies():
    companies_to_display = []
    for i in all_companies:
        companies_to_display.append(i)
    return companies_to_display



# function to filer for the users given PLZ through an input

# test route for plz if the filter works
@app.get("/companies/{plz}")
#
def filter_plz(plz:str):
    filtered_companies = []
    for i in all_companies:
        if i['plz'] == plz:
            filtered_companies.append(i)

    return filtered_companies




