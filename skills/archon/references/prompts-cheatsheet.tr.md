# Komut yapıştırma kağıdı (Türkçe)

Cevaplara tüm listeyi dökme. Kullanıcı “nasıl başlarım / yapıştır” deyince aç.

## Tek başına Archon

```
/archon
[karar — tek cümle, mümkünse geri dönüş zorluğunu yaz]
```

Örnek:

```
/archon
Redis mi Postgres session mi? Trafik ölçülmedi, takım 3 kişi.
```

## Apex Chamber (yüksek bahis)

```
/apex-chamber
[geri dönüşü pahalı karar]
Bağlam: takım=…, para/risk=…, süre=…
```

Örnek:

```
/apex-chamber
Monorepo'yu 3 servise bölelim mi? 6 mühendis, shared types her gün değişiyor, CI 12 dk.
```

## Misafir (tek tur)

```
/archon
Invite guest: Boardroom CFO for one turn — then dismiss.
[bütçe / ROI / fiyat sorusu]
```

```
/archon
Invite guest: Torvalds pragmatism for one turn — then dismiss.
[gereksiz abstraction mı, dümdüz mü?]
```

## Hotkey (mesajın tamamı sadece bu)

| Yapıştır | Ne olur |
|----------|---------|
| `A` | Son cevabı sertleştir (Anneal) |
| `D` | 2–3 seçenek, birini seç + öldürme kriteri |
| `H` | Varsayımlar tablosu |
| `X` | Sahnesiz düz verdict |
| `GG` | Atlas / ledger altbilgi |
| `K` | Tuş menüsü (TR özet: `hotkeys.tr.md`) |
| `evolve` | Archon’u geliştirme önerisi (sadece rapor) |

## Soğuk test

`evals/GOLDEN.md` → G1, G3, G7 minimum. Log: `evals/HOW-TO-RUNLOG.md`.

## Yapıştırma

- “Beşinci koltuk ekle…” → red (`compounds.md`)
- “Kesin söyle” gradesiz → red
- Buton rengi için chamber → red (kalibrasyon düşük; `/archon` yeter)
