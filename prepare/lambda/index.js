const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
    const Bucket = event.Records[0].s3.bucket.name;
    const Key = decodeURIComponent(event.Records[0].s3.object.key);

    console.log("----------Bucket-------------");
    console.log(Bucket);
    console.log("----------Key-------------");
    console.log(Key);

    const filename = Key.split('/')[Key.split('/').length - 1];
    const ext = Key.split('.')[Key.split('.').length - 1].toLowerCase();
    const requiredFormat = ext === 'jpg' ? 'jpeg' : ext;

    console.log("----------filename-------------");
    console.log(filename);
    console.log("----------ext-------------");
    console.log(ext);
    console.log("----------requiredFormat-------------");
    console.log(requiredFormat);

    try {
        const s3Object = await s3.getObject({ Bucket, Key }).promise();
        // s3객체 Body 프로퍼티에는 해당 s3객체파일의 바이너리 데이터가 들어 있다.
        console.log("----------originalImage size-------------");
        console.log(s3Object.Body.length);
        const resizedImage = await sharp(s3Object.Body)
            .resize(400, 400, { fit: 'inside' })
            .toFormat(requiredFormat)
            .toBuffer();
        await s3.putObject({
            Bucket,
            Key: `thumb/${filename}`,
            Body: resizedImage,
        }).promise();

        console.log("----------resizedImage size-------------");
        console.log(resizedImage.length);

        return callback(null, `thumb/${filename}`);
    } catch (err) {
        console.error(err);
        return callback(err);
    }

}
