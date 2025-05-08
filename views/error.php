<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $statusCode ?> - The Monkey Bussiness Bar</title>
</head>

<body>
    <div>

        <h1>Error <?= $statusCode ?></h1>
        <p><?= $errorMessage ?></p>

        <a href='<?= $homeUrl ?>'>Go back Home</a>

    </div>
</body>

</html>