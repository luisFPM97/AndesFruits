import React from 'react'
import './styles/Productos.css'

const Productos = () => {
  return (
    <div className='productContainer'>
      <div className='pageP'> 
        <h1>Nuestros productos</h1> <div className="products">
          <div className="product">
            <img className='imgProduct' src="/img/uchuva.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              UCHUVA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="/img/bananito2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              BANANITO
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="/img/feijoa2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              FEIJOA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="/img/granadilla2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              GRANADILLA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="https://cdn.pixabay.com/photo/2018/03/27/02/51/passion-fruit-3264893_1280.jpg" alt="imgProduct" />{" "}
            <a className="productName" href="">
              GULUPA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="https://www.elpais.com.co/resizer/L-5UXmFEIWGPIDR-OMG113AuXMY=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/6P5KD6P2FVDGZFZSUAATJBKX24.jpg" alt="imgProduct" />{" "}
            <a className="productName" href="">
              MARACUYA
            </a>
          </div>
          <div className="product">
            {" "}
            <img className='imgProduct' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoe0CdKAfQHkp6Ec-ZEJO5CPhybPapwRR0A&usqp=CAU" alt="imgProduct" />
            <a className="productName" href="">
              PITAYA
            </a>
          </div>
          <div className="product">
            {" "}
            <img className='imgProduct' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhgSERIYGBgYGBIYGBgYGhgYGhkYGBgaGRgYGhgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrJCQ0NDQ0MTQ0NDQ1NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEAQAAEDAQUFBQYDBgUFAAAAAAEAAhEDBAUSITETQVFhcQYigZGhMkJSscHwFGLRFiNTcpKiQ4LC4fEHFTOy0v/EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAoEQACAgEDBAIBBQEAAAAAAAAAAQIDEQQSIRMxQVEiYYEFMnGRoSP/2gAMAwEAAhEDEQA/AGhPCaE4KCRwTgmhOQBSCCIQBRTUUICigkgHJIIoApIIoApIJISFJBJAFJBJAFJBJCApIJISFJBJAJJBJAFJBBAFJBJAAppTk0oAJJJICEJ4TAnBAOCKakgHopqKAKKCQQBRQSQBRQSQBRQSQBSTZRlAFJCUpQBSQlKUAUpTZSlAOlCUJQlAOlKU2U1zwNTCjIwSSlKjFQHQjzRlMjA6UpTZSlSByEoSlKAMoFCUiUAEk1JAMCcEwIgoB6SbKZaKuBhdwHruUMLkItDMWHEJBjxgGOsEGOYU0rm7ustV9R1UPDWPnEIzccMAs+EiTnO865roXvABLjAUJ55LbecIklNe8NzcQOqxbXfG6mP8xWdVqPObiSuM71Hhcm6n9PnNZlwv9OgrXtSb709AqVXtC0ezTPiVhvemOXF3yNkf0+pe2ar+01TdTb4z+qDe09T3qbfDEPqVjhkoYQnXkWehr9HS0O0lM+2xzekOH0K1rNa6bxLHh3TUdRqFwmzCfSLmkFpII0IyKvG9+ThZ+nJr48HepSsS7r4mG1dfj/8AofVbUrTGakso8y2qVbxJBlKUElY5hlCUkCVGQlnhBlDFOgJ6frorFCyzm/8Ap/Xj0VvYiPpwXnX69ReILP2enToMrNjx9IzCyodA0dZd6CEhZXnV58A0fSfVaeEBOY0FYJ6u2Xn+jdHTUw7Jfnkyzd43yepcR5EossDRo0DwAW2WiFUqva096M9FxlbJ93k6x2rhLBV/CDe0b9wThYWxk2OmXorTXtzMoG2UwQ0kSYSNkk+HgmSTWGslF9lcMxn6H9CoJW21kqC1WQO5O4/Qrfp9dJPE+V7PP1Gii+a+H68GXKMoOaQYIzCC9ZNNZR5LTTwwyhKSSsQBJJJAMSRATgEAAqd6uik4xOgPQ/fqr0KG1UMbHM3kZdRmFWX7WWj3Qyg9rKQJOQbKz6Nnr2p/cacAPgOpT7DQfXqMs2mbiekyT4SV6E91OzU20qLA5+QazScxic50GAAZJ3+Kzbt0UuyR6VKhTHfjMn2+kYVj7GANGOJ46mem5WLV2Qo7OWySN8nNVH3nej3kmpRpNxHC1ga9zg2dS4OnTMAA5KWlf9Zr4tIZsxGN7A4YJIEuBmGjWZ0BXPdW5bTp1re+Th7xsbqb8J0WfVeu+7V3cMJeM5kg5GRuII3Lzyoc+CrKKT4PQrt3RyFrlIcyq+JSUxmoaLpkzWc09rZViz2adyvtsIjXPgU2hyS4MxrVrXVb8JFN5yOTTwPDp8lWfZo5KvUpwkJOMsnK+iNsGmdbCULOuS3bSmWuPfZAPMe6fSPDmtIr0IvKyfNzg4ScX4AVZslH3zv0HAcTzP3vVUDE8M4yT/KN3iSB0lazIGZXm6/UNf8AOP5PS0NCx1JfgdIaJPqse33rhdDecpXvbw0EArgr3vGq1wwiROZO/pwWCih2PBtstUFlnU2y+obiccIEZ+MAeams985BcvRxV291rnDCXuAGYDSA4+BVqzvb8U8yZ8zvXeenUY8rkpG7c+Ox3dmtgfSLxumfBYdvtoeQDunyKdclrAL6Z0c1xb1A08vksurVYILnQMp4xOcLPGv5YOu/gsm1uBiUhaMw4mc58tFgWsuq4m97CT3W6EtywzHEblSmrScSHEtIAwknDloBwAzzWqOmT88nGV+3xwel2O82uAE5rUY7EvLmX2xrQ8yJMQNeeS664r/p1IDXZwMjllxz8Fwnp5w5wXjZCXCfJr2+z4hiAzHqOCywV0DnBwkLEtVPC8jccx0K3aC5vMH+DDrqeFYv4ZEkkkvTPNEkkkgAikkgEorVVwMc7gMupyClVK3uJcymN5JPhkPUqk3iLZ201fUtUX2z/hn2uiWBlRzwHPDnQHQ8YSG44mQDIE8QdFVN+2sF8Wh4JAwvJDnd04i3ERMFpcZ17oXXdrOzgqNstQOLW0nhj4Jk06haCeWYg8nnguZ7W3SLPhFKg2C0gPLnucCTMYXOjEIImMweIlZ1tTS9mq5tt7VxnwZtl7RWmcJeHl2TXObLgcORLjm7dz7o4Z37JVqg1GVX5vplo94Z5ZzrkTnzlc/Y7JUycRAkHPfwy5LafWAbiLwcIjIZzJMTv1Ga53bVL4pEUqTTcslq5b7cGPsz+81uLDnOACdOI0+awLZU756lXrpa1lB9R0FziSD+Uez56rEqvkkro4JcGmmyTWSVj81as2qpMIV2zBc5I2Rkddc1lxCei6NlztMOj76rH7OPGQ6ffzXcUgMK6RisGW6yUZHHXjdcZjcudtlKMuv398F395tGf3xXG3oyCclysjg06ebksM52wW3Y2lrj7JOF/wDK46+Bg+C7crze8z313lz2jaUGPJzLQD1b3SfSfFaqX8DyNbHFjZasJl738HBg6NEn+5zh4K3brTgYSdAFl9n34qLX/G6o/wDqe45p994iwgc5XiXvdc/5PWrW2uK9I5W8b4a55aTnwAJgeCjp0XPcWuaAMsMz3pG/LLcs28mNHeLZOhiZha/ZwhzQWNObiSCJJdvM71tcYwr3RRj3SlNxkWRS2bN7XESC0gf3ajOD4LBsdOHO9qQS0Tw1y49V116Uw6DvIgiMJCym3XUMkNJ4QPuVzrt+LTfcmUOcos3C2a7GAGMRJzmBBnNUr4oOY9zCPZLhnpycun7IXc5tRz3swwAGyIM+9C0r7uRtc42nC4DPnwnmuTtjGeS6i3HB5/dtck5iIIiNOfMZxu4rStFi2gL9SZkaAAaSTorrrlFOc5OW6J5p9FjSxzXEjhGc5ffmk7k5ZiWjW9uJHEX1SDC1uNrpBJDc8JBIgyM9Jy4hafZq31DS2IYA0VG1MeeIOggsadwdAnPcpLdcAeX1DUDC1sjHEOzybAzHWCo7kNUuL3OnETLSZGImXPjQOPEL0HZHo8PwY4Vy63bsz0uwuloUF6s0dwJHmJ/0+qNyvOAA5/p95J96mKZPOn6va36rzaJYuT+z0Lo7oNfRlpJoRXvnz4UkEkA5JOARhAMWbbKuGuwnQYZ6Yp+i1cKzbfZsVQH8v1XK7sbdA0rln0z0O32cVrKWt1LDG/MCW5Z7wFyjL1p1C5ge0uaIe1+RY4CDLCJG/wDpUlzX45jRTqboAPEc1sW2y2W0tBqU2uePZeHOY/pjZDsPETC4WRU19miUZQljwcDb7GC7CwBgzLiIz4R6ecrBfTe/92wAiT7I1A0z38SdOS9Hb2csdn79Ql51DHOLmb/dcSDu3A9VzF+38zNtJjW65sAHyVY1uK7iPyfbg5m3PwMFIGYABWYFYruxGVDhXbJZR28BZKuUHkKs1qmYFSSyd4PB0d1XgWEH70Xb2K+gWheZ2dy2bNXIGvkoTwTOClydjbbeDlK5e9KkzBTatqMarKtFqJnNc5ts7VRUTEt75qLruyjybM4cHvA8WtPzJXF1zif4ruOyTIou/nP/AKtWqpYijxtVLM2ybstUBsrOQcP7irt8VO6fvcsfss7BtaB1pvcM+AJb/p9Vq3m2WaHNeJdHba8+z1k90E0cTatTBjMbp36Qtq7GjEDhcI6D1hc9e1F4OsAbs/AyM0+5rwghjiOXtSepcY6QAt0qt9WYsxKzbZho7e3CQHOMjQcv1UVnvhtIgYZzj78lUqWyaYa1o3kudHoNywLytJZvBO7hpv8ANY66XJ4ZolPasnqN13gyq3E3jBB3FOvGs2mwvcchuGpXEWO3upU6ZYYe8Y3DlwV/tDbHOc1oPdLGu8TKo6sPBKl5IBfe1c4CYHdhw/2UlnPvOa6NxE5OC5plVwr4XeyWmI1lbFK34GluI56D/cLpOlR/b5JjNvuV70r6vIn5mPmVRuyvnh2ZbmTu3mc/NZl4UH1ariCYnRxOH/KujuKxPwNa8NJbi7wmSNQHE5Ejwy81plGEK+Xy/BxUpSs4WEvJ190NIaOn0lPvk/uyOLqfo8O+insFMtZn4qnezpwN/MXeUx8yslEd1qS9mmyWIN+kUoShGEYX0B86NhJOhBASYUYUuFHCgIoUdSnOas4UcCiSysF6p7ZqRivOeamZeL2DuuQttKCVm1Flawz21NSRHfFvqvEF+XALnn0+JWtXWfVaiIk8LCKuzS2alIQwq5yyNaxStamtUjQqMvFk1IK6x0BUWFSbRVZ1XJYq1TCzrU+BrxU76kLMtVVVjHLL2TUYCs1PE5eg3HRwUG/mLneZgegC4m4bK6rUawbzmeA1J8l6Q2mAABoAAOgyC2xXB4N0tzOSvB34e3ip7lUNJ4T7LvIhrvFdUGhzY8isztLdu1oktHfZ328T8TfEeoCp9mL2D2bJ7u+0d38zeE8QvN11LzuR6mjtUobX3RXvy7Jkx/wuUqWAzAkDz+a9TrUw8Z5LFtVzjhrMLNTqXBYLXUqTOQNoqBuAZmMnbvAJtazvqAEwXCCdwMCPBa1ou4tKNnpRI4rT1kuYnPpt8PsU7ustRri57tAWhoMjPfyXR2+kRgJzmmzzCr2azOcRlvC6O8rKHU25aCAsltu6WWaIQ2rCONr2cOeHEaTHJRMsEOxHFOvtEjwz0W26738FGaJHdcIjMfUKVc0sJjppvkjs1gxkQPoF092WAMHz6qS7bGGtB4wr73AaLPObfB0UcCqPgdFiOfjcX7tB0+/qpLfay52zYeTuZ4dOKcylAheloaGvlIya61RhtXdkWFLCp8KOzXqHjlfCkp9mkhBY2aOzVzZpbNAU9mjs1b2aGFAZltsuJsjULnLTTIK7fCsy8rsxjEwZ7xx6LnKOeTXRft+LOLqsVKoxbVps5acws+pTXPBt35M1zUIVp7FA5ikgjKIcgUCoaCkPFRJz1C4woqlVU2nTqY7ktWrCzqrySnFznuDGNLnEwGtBcSeAAzK77sp2TFEivaoNTVjMiGHi46Of6DmdOsIYMl9+eC52TuQ0KWOoIe8CQdWN1Dep1PgNy3cCmLwgXt4rsYG8siwLhO010Os9T8RSBFN7pMe48nTk0nTgcuE9/tG8Uyqab2ljwHNcCHNOYIOoIVZRUlhl6rHXLcjk7n7QtcA2qYPxbj14FdI17Xcx1XC3/wBn32dxqUZfR14up8ncW/m841Na774qM9l+XA5jyXk36LnMT2qtRGaO7tFia5VbPdDWGTnwBWdZu0zY/eNPUfotGlflFw/8kdQR9FkddkeMM74RpUKDQYIj9VcLARBOQWO2+KP8QIOvyiP8QeAJ+i5dOb8MvhezS/Dt+aX4dhzIB4ZLFf2hp+7iPhHzVarf7z7DQOZz9F0jRY/AyvZ0tW0tYJJAAWJa73L+7TyG8nU9OHz6LJNSo93eJcToM/QBbt2XXhh9TXc3hzP6LdRo8PLM92ojWskl3WQhuJwzOg4BXtmpJSlepGKisI8OyyVknJkezS2aklGVYoRYElLKSEF7ClhVrZJbIoSVMKGFW9iUtiUBTwpYVc2JQ2BQGVa7uZUHeEH4hr48Vzl4XFUbmxuMfl1/p18pXcmzlQVbLO9VaTOkbJR7HlVpGEkOyPA5HyKovqjivTbfcO0EF5A4BYdTsDSPvu81Tad1ecQ6sFC+uOK7Z3/T2n/Ef5ofsBT4uPUlNod7OHa57zDGlx/K0mPLRWrPctR5moQwcMnO8hkPPwXXDsLTGisU+y72ezUf0JJHkclZRSOcrJMzbsYyziKLAHEQXnvPd1duHIQOStuvKpxWnTuZw9qHeh9MlZZcVM8R1VziYBt9T4k02yp8RXTfs2xL9m6fNCDmPxT/AIil+Jf8RXUjs5T5ojs7T5oScr+IfxKyrVdVN5Lm9xx+HQ9W/pC9A/Z+kMzPmo33RS91s8yqvkmLaeUeavuys32cLxyOE+Ry9VSfasBh0TyLXerSV6ZW7OU3+2CRwnLyTG9krL/DHqqOETRG+a8nmv8A3IcU4W8Hj5FenM7LWYf4TVOzs9QGlNvko2It15nm9jqlxgCOZBj0BK6i7rna6C+oTyYI9T+i6mndNMaMHkrLLG0aBFFCV8msJ4KFlsTGCGMjnqT1JzVnZK62mpW0xwXRGaWW8szdklslqigOCIohWKmVskdjyWqKQTtkhBkbA8EVr7NJAWMKWFOSQDcKGFPShARwmuKe4phCjJKQ1xUZClhLCoJIcKGFTQhCAhLEMCmhKEBDs00sVjClhQFY003Zq3hTSxA0RMJCnbBUZanU9VYqSQo3uAUjzCjayVVslLJC5pOqTaPJWxTASxhVz6L4SK4s5TxZlIXoYinI3IH4ccUfwwRD0/HkqtSLKSGfhgl+H5olyUlTiQ3IbsClsjwUgentenyGUQgJ4CmgFNcyFZSKyin2GYUcKcElc5gwpIpIAykmYksSAekSm4kMSAICWEoNfCftOaqWyMLDwTCpXOPFMLkAxAolIoQBBFBCQogIIh6AdgTSxHaJpehOQOakwIFyWJCrY8iSnqHEntqDeokhFgcmgKSWlDCETJaEAEsksPNHCgE2FIcMKMNCcYUEoaYRCEBGBxUkAJQaniEdoFJGBzAnkqE1Sm4lG32W3Y7EkpSo5SxK5QklJRSkgBKMpJIBSlKSSARKQKCSALnIBySSqA4ggSEkkACUMSSSsAYksSSSAGJCUkkAkpSSQClKUkkApSlJJAKUZSSQgUpSkkhIpRlJJCAylKSSEhlGUkkAJSlJJAKUkkkB/9k=" alt="imgProduct" />
            <a className="productName" href="">
              TOMATE DE ARBOL
            </a>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Productos
