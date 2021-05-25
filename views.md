# Dashboard

 `/`
 statystyki dzisiejszych zamówień (zdalne i lokalne)
 lista rezerwacji i eventów zaplanowanych na dziś 

# Logowanie 
`/login`
pola na login i hasło
guzik do zalogowania (link do dashboardu)


# Widok dostępności stolików

`/tables`
wybór daty i godziny
tabela z listą rezerwacji oraz wydarzeń 
    każda kolumna = 1 stolik
    kazdy wiersz = 30 minut 
    ma przypominać widok tygodnia w kalendarzu googla gdzie w kolumnach zamiast dni są różne stoliki
    po kliknięciu rezerwacji lub eventu przechodzimy na stronę sszczegółów 

`/tables/booking/:id`
zawiera wszystkie informacje dotyczące rezerwacji
umożliwia edycję i zapisanie zmian 
`/tables/booking/new`
analogicznie do powyższej, bez początkowych informacji 
`/tables/events/:id`
analogicznie do powyższej, dla eventów
`/tables/events/new`
analogicznie do powyższej, dla eventów,  bez początkowych informacji 
# Widok kelnera\

`/waiter`
tabela 
    w wierszach stoliki 
    w kolumnach różne rodzaje informacji (status stolika, czas od ostatniej aktywności)
    w ostatniej kolumnie dostępne akcje dla danego stolika 
`/waiter/order/new`
numer stolika (edytowalny)
menu produktów dostępnych w restauracji 
opcje wybranego produktu
zamówienie (zamówione produkty z opcjami i ceną) 
`/waiter/order/:id`
jak powyżej

# Widok kuchni

`/kitchen`
wyświetlanie listy zamówień w kolejności złożenia 
lista musi zawierać nr stolika(lub zamówienia zdalnego) oraz pełne informacje dot zamówionych dań)
na liście musi  być możliwość oznaczenia zamówienia jako zrealizowane 