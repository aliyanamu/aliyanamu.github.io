ALGORITMA:
1. Masukkan nilai massa benda yang satuannya kg
2. Masukkan nilai percepatan yang satuannya m/s2
3. Hitung massa dikali percepatan
4. Set hasil dari perkalian massa dan percepatan sebagai resultan gaya
5. Tampilkan resultan gaya

PSEUDOCODE:
STORE "massa" with any value number (600)
STORE "percepatan" with any value number (2)
STORE "resultan gaya" without any value

CALCULATE "massa" times "percepatan"
SET "resultan gaya" value with calculation result
DISPLAY "resultan gaya"

///////////////////////////////////////////////////////
ALGORITMA:
1. Masukkan nilai tahun dengan angka berapapun
2. Cek apakah tahun tersebut merupakan tahun kabisat
  2.a Jika tahun habis di bagi 4 dan tidak habis di bagi 100, maka
      tampilkan pesan bahwa tahun tersebut merupakan tahun kabisat
  2.b Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400,
      maka tampilkan pesan bahwa tahun tersebut merupakan tahun kabisat
  2.c Jika selain pilihan a dan b, maka tampilkan pesan bahwa tahun tersebut
      bukan merupakan tahun kabisat

PSEUDOCODE:
STORE "tahun" with any value number

IF "tahun" mod 4 EQUALS 0 AND "tahun" mod 100 NOT EQUALS 0
  DISPLAY "Tahun ini tahun kabisat. Ada tanggal 29 Februari!"
ELSE IF "tahun" mod 4 EQUALS 0 AND "tahun" mod 100 EQUALS 0 AND "tahun" mod 400 EQUALS 0
  DISPLAY "Tahun ini tahun kabisat. Ada tanggal 29 Februari!"
ELSE
  DISPLAY "Tahun ini bukan tahun kabisat. Hanya ada 28 hari di bulan Februari."
END IF

///////////////////////////////////////////////////////
ALGORITMA:
1. Tentukan nilai batas maksimum cucian Foxie dengan angka berapapun (20)
2. Set nilai counter mulai dari 0
3. Cek apakah semua cucian Foxie sudah masuk ke dalam mesin cucian
  3.a Jika jumlah cucian yang masuk ke dalam mesin cuci sama dengan batas
      maksimum cucian Foxie, maka lanjut ke langkah 4
  3.b Jika jumlah cucian yang masuk ke dalam mesin cuci kurang dari batas
      maksimum cucian Foxie, maka hitung jumlah pakaian. Lalu, counter ditambah 1
  3.c Jika jumlah cucian lebih dari batas maksimum cucian Foxie, maka
      ada di antaranya yang bukan cucian Foxie (Kok bisa?)
4. Nyalakan mesin cuci

PSEUDOCODE:
STORE "batasLaundry" with any value number (20)
STORE "counter" = 0

IF "counter" EQUALS "batasLaundry"
  DISPLAY "Nyalakan mesin cuci"
ELSE IF "counter" LESS THAN "batasLaundry"
  DISPLAY "Jumlah pakaianmu di dalam mesin cuci : ", "counter"
  ADD "counter" by 1
ELSE
  DISPLAY "Mungkin ada pakaian orang lain di dalam keranjangmu, Foxie"
END IF

///////////////////////////////////////////////////////
ALGORITMA:
1. Tentukan nilai jumlah seluruh siswa di kelas dengan angka berapapun (40)
2. Set nilai counter mulai dari 1
3. Absen dan panggil satu persatu siswa di kelas
  - Cek apakah kuku siswa panjang atau tidak
    4.a Jika kuku siswa panjang, maka siswa mendapat hukuman
    4.b Jika kuku siswa pendek, maka puji siswa tersebut
  - Counter ditambah 1


PSEUDOCODE:
STORE "jumlahSiswa" with any value number (40)
STORE "kukuPanjang" EQUALS true
STORE "counter" = 1

WHILE "counter" LESS THAN "jumlahSiswa" + 1
  DISPLAY "Murid ke - ", "counter"
  IF "kukuPanjang" EQUALS true
    DISPLAY "Kamu kena hukuman!"
  ELSE
    DISPLAY "Bagus, kamu sudah memotong kuku dengan baik"
  END IF
  ADD "counter" by 1
END WHILE
