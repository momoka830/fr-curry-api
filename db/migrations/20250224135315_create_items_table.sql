-- migrate:up
CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  type VARCHAR(255),
  name VARCHAR(255),
  description TEXT,
  price INTEGER,
  "imagePath" VARCHAR(255),
  deleted BOOLEAN
);

INSERT INTO items (id, type, name, description, price, "imagePath", deleted) VALUES
(1, 'curry', 'カツカレー', '食べると勝負に勝てると言われる勝つカレー。ラクラクカレー定番の１品です', 1490, '/img_curry/1.jpg', false),
(2, 'curry', 'ポークポークカレー・ミート', 'グリーンアスパラと相性の良いベーコンにいろどりのフレッシュトマトをトッピングし特製マヨソースでまとめた商品です', 1490, '/img_curry/2.jpg', false),
(3, 'curry', '牛すじカレー', 'トロトロの牛すじとネギの風味が格別な味わいシンプルなカレーです！', 1490, '/img_curry/3.jpg', false),
(4, 'curry', '味噌カツカレー', 'マイルドな味付けのカレーに大きくカットした味噌カツをのせた、バターとチーズの風味が食欲をそそるお子様でも楽しめる商品です', 1900, '/img_curry/4.jpg', false),
(5, 'curry', 'とんかつカレーラーメン', 'カレーはライスだけではありません。ラクラクピザが開発したカレーラーメンは絶品の美味しさ！', 1900, '/img_curry/5.jpg', false),
(6, 'curry', 'ヒレカツカレー', 'やわらかくあっさりとしたヒレ肉を上質な衣で包み込みました。4種類の濃厚な味わいが一つで楽しめるカレーです', 2700, '/img_curry/6.jpg', false),
(7, 'curry', '濃厚Gorgeous4', 'こだわりのソースで、旨みとコクを堪能！濃厚Gorgeous4とは、動物由来の原材料を使用していないカレーです。ベジタリアンの方にオススメです', 2570, '/img_curry/7.jpg', false),
(8, 'curry', 'カレーうどん', 'ラクラクカレー自慢のカレーに魚介のダシ、ローストオニオンのコクが加わった絶妙なスープをお楽しみください', 2160, '/img_curry/8.jpg', false),
(9, 'curry', 'Charity4', 'にんにくとトマトの旨みが効いたスパイスカレー。食べると思わず元気が出るラクラクカレーの自信作', 2700, '/img_curry/9.jpg', false),
(10, 'curry', 'ほうれん草のカレードリア', 'カレードリアの王道！ホワイトソースとカレーのダブルソースとなす、ほうれん草、チーズのおいしい組み合わせ', 2160, '/img_curry/10.jpg', false),
(11, 'curry', 'Specialドリア4', 'ホワイトソースとカレーのダブルソースにハンバーグを合わせました', 2700, '/img_curry/11.jpg', false),
(12, 'curry', 'バラエティー４', 'あらびきスライス牛肉とイタリアンチーズを、トマトソースと特製マヨソースの2種類のソースで召し上がって頂く商品です', 2160, '/img_curry/13.jpg', false),
(13, 'curry', 'えびナスカレー', 'デミグラスソースでじっくり煮込んだ旨味たっぷりのえびとナスのカレー', 2980, '/img_curry/14.jpg', false);

-- migrate:down 
