import pandas as pd
import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import os
import time
import itertools
import openpyxl

driverPath = r"C:\Users\Merit\Desktop\chromedriver.exe"
driver = webdriver.Chrome(executable_path=driverPath)
driver.get("https://www.amazon.in/s?k=offer+television&ref=nb_sb_noss")
ProductNames = []
ProdNewPrices =[]
ProdOldPrices = []
Pname=driver.find_elements_by_xpath("//span[contains(@class,'a-size-medium a-color-base a-text-normal')]")
Dprice =driver.find_elements_by_xpath("//span[contains(@class,'a-price-whole')]")
Oprice =driver.find_elements_by_xpath("//span[contains(@class,'a-price a-text-price')]")
for j in Pname:
    ProductNames.append(j.text)
for k in Dprice:
    ProdNewPrices.append(k.text)
for l in Oprice:
    ProdOldPrices.append(l.text)
df=pd.DataFrame(list(itertools.zip_longest(ProductNames,ProdNewPrices,ProdOldPrices, fillvalue="NA")),columns=["Product Name","New Price","Old Price"])
df.to_excel(r"E:\Output"+"\\"+"TelevisionOffer.xlsx", index = False)
driver.close()

