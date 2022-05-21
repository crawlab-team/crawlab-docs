# Schedule

Most of the time, we may need to periodically run crawling [tasks](../task/README.md) for
a [spider](../spider/README.md). Now you need a schedule.

The concept *schedule* in Crawlab is similar to [crontab](https://www.tutorialspoint.com/unix_commands/crontab.htm) in
Linux. It is a long-existing job that runs spider tasks in a periodical way.

::: tip
If you would like to configure a web crawler that automatically runs crawling tasks every day/week/month, you should
probably set up a *schedule*. Schedule is the right way to automate things, especially for spiders that crawl
incremental content.
:::

## Create Schedule

1. Navigate to `Schedules` page.
2. Click `New Schedule` button on the top left.
3. Enter basic info including `Name`, [Cron Expression](https://www.tutorialspoint.com/unix_commands/crontab.htm)
   and `Spider`.
4. Click `Confirm`.

The created schedule is enabled by default. Once you created a schedule which is already enabled, it should trigger
a [task](../task/README.md) on time according to its cron expression you have set.

::: tip
You can debug whether the schedule module works in Crawlab by creating a new schedule with `Cron Expression`
as `* * * * *`, which means "every minute", so that you can check if a task will be triggered when the next minute
starts.
:::

## Enable/Disable Schedule

You can enable or disable schedules by toggling the switch button of `Enabled` attribute in `Schedules` page and
schedule detail page.

## Cron Expression

*Cron Expression* is a simple and standard format to describe the periodicity of tasks. It is the same as the format in
Linux `crontab`.

```
*    *    *   *    *  Command_to_execute
|    |    |    |   |       
|    |    |    |    Day of the Week ( 0 - 6 ) ( Sunday = 0 )
|    |    |    |
|    |    |    Month ( 1 - 12 )
|    |    |
|    |    Day of Month ( 1 - 31 )
|    |
|    Hour ( 0 - 23 )
|
Min ( 0 - 59 )
```

- The asterisk (*) operator specifies all possible values for a field. e.g. every hour or every day.
- The comma (,) operator specifies a list of values, for example: "1,3,4,7,8".
- The dash (-) operator specifies a range of values, for example: "1-6", which is equivalent to "1,2,3,4,5,6".
- The slash (/) operator, can be used to skip a given number of values. For example, "\*/3" in the hour time field is
  equivalent to "0,3,6,9,12,15,18,21"; "\*" specifies 'every hour' but the "/3" means that only the first, fourth,
  seventh...and such values given by "*" are used.

::: warning
*Cron Expression* in Crawlab uses the same format as the one in Linux `crontab`. That is to say, the smallest unit
is **`minute`**. It is different from some crontab-style schedule frameworks whose smallest unit is second.
:::

::: tip
If you are not sure about your cron expression, you can go to [https://crontab.guru](https://crontab.guru/) to validate
the correctness.
:::
