def calculate(info):
    amount = float(info['amount'])
    years = float(info['years']) 
    interest = float(info['interest'])/100

    tn = years * 1

    totalAm = amount*(1 + (interest/1))**tn
    intAm = totalAm - amount
    permonth = (amount * interest) * years

    return permonth, totalAm, intAm, amount