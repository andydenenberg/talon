class Site < ActiveRecord::Base
  has_many :time_logs
  
  def log_stats
    tl = Array.new
    sites = Site.all
    sites.each do |site|
       t = Array.new
       count = TimeLog.where("site_id = ?", site.id).count
       first = TimeLog.where("site_id = ?", site.id).first.checked
       last = TimeLog.where("site_id = ?", site.id).last.checked
       t = [site.id, count, first, last ]
       tl.push t
     end
     return tl
  end
    
  def ok
    ok = Site.where(:status => 'SERVER_OK').length
  end

  def warning
    warning = Site.where(:status => 'WARNING').length
  end

  def unable
    unable_to_connect = Site.where(:status => 'UNABLE_TO_CONNECT').length
  end

end


